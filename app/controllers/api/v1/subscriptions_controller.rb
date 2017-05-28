module Api::V1
  class SubscriptionsController < Api::V1::ApiController
    before_action :authenticate_user!
    before_action :set_subscription, only: [:show, :update, :destroy]

    # GET /v1/subscriptions
    def index
      @subscriptions = Subscription.all().where(user: current_user)
      render json: @subscriptions
    end

    # GET /v1/subscription/1
    def show
      render json: @subscription
    end

    # POST /v1/subscription
    def create
      @subscription = Subscription.create!(subscription_params_with_user)

      json_response(@subscription, :created)
    end

    # # PUT /v1/subscription
    # def update
    #   @subscription.update(subscription_params)
    #
    #   json_response(@subscription)
    #
    # end
    #
    # # DELETE /todos/:todo_id/items/:id
    # def destroy
    #   @subscription.destroy
    #   head :no_content
    # end

    private

    def subscription_params
      # whitelist params
      params.permit(
        :version,
        :status,
        :endDate,
        :startDate,
        :paymentMethod,
        :priceCents
      )
    end

    def subscription_params_with_user
      subscription_params().merge(user_id: current_user.id)
    end

    def set_subscription
      @subscription = Subscription.find(params[:id])
    end
  end
end

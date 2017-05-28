module Api::V1
  class MembershipsController < Api::V1::ApiController
    before_action :authenticate_user!
    before_action :set_membership, only: [:show, :update, :destroy]

    # GET /v1/memberships
    def index
      @memberships = Membership.all().where(user: current_user)
      render json: @memberships
    end

    # GET /v1/membership/1
    def show
      render json: @membership
    end

    # POST /v1/membership
    def create
      # logger.debug(
      #   "membership_params_with_user: #{membership_params_with_user[:avatar].inspect}"
      # )
      @membership = Membership.create!(membership_params_with_user)

      json_response(@membership, :created)
    end

    # # PUT /v1/membership
    # def update
    #   @membership.update(membership_params)
    #
    #   json_response(@membership)
    #
    # end
    #
    # # DELETE /todos/:todo_id/items/:id
    # def destroy
    #   @membership.destroy
    #   head :no_content
    # end

    private

    def membership_params
      # whitelist params
      params.permit(
        :version,
        :status,
        :end_date,
        :start_date,
        :payment_method,
        :price_cents
      )
    end

    def membership_params_with_user
      membership_params().merge(user_id: current_user.id)
    end

    def set_membership
      @membership = Membership.find(params[:id])
    end
  end
end

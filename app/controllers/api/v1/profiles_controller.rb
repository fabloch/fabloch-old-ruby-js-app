module Api::V1
  class ProfilesController < Api::V1::ApiController
    before_action :authenticate_user!
    before_action :set_profile, only: [:show, :update, :destroy]


    # GET /v1/profile
    def show
      render json: @profile
    end

    # POST /v1/profile
    def create
      @profile = Profile.create!(profile_params)
      json_response(@profile, :created)
    end

    # PUT /v1/profile
    def update
      @profile.update(profile_params)
      json_response(@profile)

    end

    # DELETE /todos/:todo_id/items/:id
    def destroy
      @profile.destroy
      head :no_content
    end

    private

    def profile_params
      # whitelist params
      params.permit(
        :username, :firstname, :lastname, :description, :birthday
      ).merge(user_id: current_user.id)
    end

    def set_profile
      @profile = Profile.find_by(user: current_user)
    end
  end
end

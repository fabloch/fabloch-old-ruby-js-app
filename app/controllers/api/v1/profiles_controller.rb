module Api::V1
  class ProfilesController < Api::V1::ApiController
    before_action :authenticate_user!

    # GET /v1/profile
    def show
      render json: Profile.find_by(user: current_user)
    end

  end
end

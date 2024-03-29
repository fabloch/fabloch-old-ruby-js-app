module Api::V1
  class UsersController < Api::V1::ApiController

    # GET /v1/users
    def index
      render json: User.all
    end

    # GET /v1/users/{id}
    def show
      render json: User.find(params[:id])
    end

  end
end

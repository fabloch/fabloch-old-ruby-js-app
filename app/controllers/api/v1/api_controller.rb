module Api::V1
  class ApiController < ActionController::API
    include DeviseTokenAuth::Concerns::SetUserByToken

    def json_response(object, status = :ok)
      render json: object, status: status
    end

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def render_unprocessable_entity_response(exception)
      render json: exception.record.errors, status: :unprocessable_entity
    end

    def render_not_found_response(exception)
      render json: { error: exception.message }, status: :not_found
    end

    before_action :deep_snake_case_params!
    def deep_snake_case_params!(val = params)
      case val
      when Array
        val.map {|v| deep_snake_case_params! v }
      when Hash
        val.keys.each do |k, v = val[k]|
          val.delete k
          val[k.underscore] = deep_snake_case_params!(v)
        end
        val
      else
        val
      end
    end
  end
end

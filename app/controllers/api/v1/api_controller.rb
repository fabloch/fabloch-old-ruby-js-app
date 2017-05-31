module Api::V1
  class ApiController < ActionController::API
    include DeviseTokenAuth::Concerns::SetUserByToken

    def json_response(object, status = :ok)
      render json: object, status: status
    end

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from Stripe::CardError, with: :render_card_error

    def render_unprocessable_entity_response(exception)
      render json: exception.record.errors, status: :unprocessable_entity
    end

    def render_not_found_response(exception)
      render json: { error: exception.message }, status: :not_found
    end

    def render_card_error(exception)
      body = exception.json_body
      error  = body[:error]

      print "Status is: #{exception.http_status}"
      print "Type is: #{error[:type]}"
      print "Charge ID is: #{error[:charge]}"
      # The following fields are optional
      print "Code is: #{error[:code]}" if error[:code]
      print "Decline code is: #{error[:decline_code]}" if error[:decline_code]
      print "Param is: #{error[:param]}" if error[:param]
      print "Message is: #{error[:message]}" if error[:message]

      render json: { error: error[:code] }, status: exception.http_status
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

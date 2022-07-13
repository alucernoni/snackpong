class ApplicationController < ActionController::API
include ActionController::Cookies

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
before_action :authenticate_user


private

def current_user
    @current_user ||= User.find_by_id(session[:user_id])
end

def authenticate_user
    return if current_user
    render json: { errors: "You must be logged in to do that." }, status: :unauthorized
end


def render_not_found_response(exception)
    render json: { error: "#{exception.model} not found"}, status: :not_found
end

def render_invalid_response(exception)
render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity
end

end

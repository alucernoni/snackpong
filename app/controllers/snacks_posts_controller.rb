class SnacksPostsController < ApplicationController
    before_action :authorize_user, only: [:update, :destroy]
    before_action :find_post
    skip_before_action :authenticate_user, only: [:index]

    def index
        render json: SnacksPost.all  
    end

    def show
        render json: @post
    end

    def create
        post= SnacksPost.create!(post_params)
        render json: post, status: :created
    end

    def update 
        @post.update!(post_params)
        render json: @post, status: :accepted 
    end

    def destroy 
        @post.destroy!
        head :no_content
    end

    private 

    def find_post
        @post= SnacksPost.find_by(id: params[:id])
    end

    def authorize_user
        return if current_user.admin? || current_user == snacks_post.user
        render json: { errors: "You don't have permission to perform that action" }, status: :forbidden
    end
    

    def post_params
        params.permit(:title, :content, :user_id)
    end

end

class SnacksPostsController < ApplicationController

    before_action :find_post

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
        @post.destroy!(post_params)
        head :no_content
    end

    private 

    def find_post
        @post= SnacksPost.find_by(id: params[:id])
    end

    def post_params
        params.permit(:title, :content, :user_id)
    end

end

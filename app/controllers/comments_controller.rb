class CommentsController < ApplicationController
   before_action :find_comment
    
    def show
        render json: @comment, include: :replies
    end

    def create 
        comment= Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def update
        @comment.update!(comment_params)
        render json: @comment, status: :accepted
    end

    def destroy 
        @comment.destroy!
        head :no_content
    end

    private 
    
    def find_comment 
        @comment=Comment.find_by(id: params[:id])
    end

    def comment_params 
        params.permit(:comment)
    end
end

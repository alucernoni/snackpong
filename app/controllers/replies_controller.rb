class RepliesController < ApplicationController
    before_action :find_reply
    
    def show
        render json: @reply
    end

    def create 
        reply= Reply.create!(reply_params)
        render json: reply, status: :created
    end

    def update
        @reply.update!(reply_params)
        render json: @reply, status: :accepted
    end

    def destroy 
        @reply.destroy!
        head :no_content
    end

    private 
    
    def find_reply 
        @reply=Reply.find_by(id: params[:id])
    end

    def reply_params 
        params.permit(:reply)
    end
end

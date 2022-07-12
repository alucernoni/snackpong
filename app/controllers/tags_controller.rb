class TagsController < ApplicationController
    before_action :find_tag
    
    def show
        render json: @tag
    end

    def create 
        tag= Tag.create!(tag_params)
        render json: tag, status: :created
    end

    private

    def find_tag 
        @tag=Tag.find_by(id: params[:id])
    end

    def tag_params 
        params.permit(:tag)
    end

end

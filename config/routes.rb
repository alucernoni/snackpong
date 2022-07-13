Rails.application.routes.draw do
  
  resources :snack_tag_joins
  resources :xp_joiners
  resources :replies
  resources :tags
  resources :snacks_posts
  resources :comments 
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"  

end

Rails.application.routes.draw do
  resources :comments
  resources :meals
  resources :inventories
  resources :activities
  resources :user_trips
  resources :trips
  resources :users

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  post "/reset", to: "passwords#reset"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

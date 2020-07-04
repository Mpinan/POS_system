Rails.application.routes.draw do
  resources  :sessions, only: [:create]
  resources :signup, only: [:create]
  root 'pages#index'  

  namespace :api do
    namespace :v1 do
      resources :tables, param: :tableNumber
      resources :items
    end
  end

  get '*path', to: 'pages#index', via: :all

end

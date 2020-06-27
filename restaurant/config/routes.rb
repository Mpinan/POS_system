Rails.application.routes.draw do
  root 'pages#index'  

  namespace :api do
    namespace :v1 do
      resources :tables, param: :tableNumber
      resources :items
    end
  end

  get '*path', to: 'pages#index', via: :all

end

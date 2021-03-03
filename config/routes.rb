Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  mount ActionCable.server => '/cable'

  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]

    resources :servers, only: [:create, :show, :update, :destroy]
    resources :user_servers, only: [:create, :destroy]
    resources :channels, only: [:create, :show, :update, :destroy]
    resources :messages, only: [:create, :update, :destroy]
  end

end

Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  mount_devise_token_auth_for 'User', at: 'auth'

  scope module: 'api' do
    namespace :v1 do
      resources :users, only: [:index, :show]
      resource :profile
      resources :subscriptions
    end
  end
end

Rails.application.routes.draw do
  root 'application#index'
  scope :api, defaults: { format: :json } do
    devise_for :users
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

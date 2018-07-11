Rails.application.routes.draw do
  resources :artists, :only => [:index, :show]
  resources :works, :only => [:index, :show]
end

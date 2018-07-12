Rails.application.routes.draw do
  get 'session/new'
  root :to => 'pages#home'
  resources :users, :only => [:new, :create]

  get '/login' => 'session#new' # login form
  post '/login' => 'session#create' # perform a login
  delete '/login' => 'session#destroy' # perform a log out
end

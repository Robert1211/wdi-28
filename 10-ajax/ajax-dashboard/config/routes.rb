Rails.application.routes.draw do
  root :to => 'pages#index'

  # Vanilla text API endpoints
  get '/brother' => 'dashboard#brother'
  get '/time' => 'dashboard#time'
  get '/uptime' => 'dashboard#uptime'

  # Fancy JSON API endpoint
  get '/info' => 'dashboard#info'
end

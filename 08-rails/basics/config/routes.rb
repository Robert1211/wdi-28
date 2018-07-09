Rails.application.routes.draw do
  root :to => 'pages#homepage' # Special way to write the root because it's important
  get '/home' => 'pages#homepage' # 'controller#action'
  get '/faq' => 'pages#faq'
  get '/about' => 'pages#about'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calc#calculate'
end

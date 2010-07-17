# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_tweetapp_session',
  :secret      => '8149b74a80ab45252975bd8d3962aba8e6f5e619aa5d16ae6edf2533f5dde083eb47a50000866f67c67947834db0240c0b84a5bb1ac555a3dc63228dd5268a2c'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store

# Discourse SSO Redirect

Redirect to an SSO consumer after logging in with an SSO provide.

## Use case

https://meta.discourse.org/t/sso-provider-log-in-doesnt-return-to-consumer-site-when-authenticating-with-google/40923

## Required changes to Discourse source

The following patch needs to be applied to the Discourse source in order for this plugin to work.

**Patch command**
    patch -p1 < discourse-sso-redirect.patch

**discourse-sso-redirect.patch**

    diff --git a/app/controllers/session_controller.rb b/app/controllers/session_controller.rb
    index e252ec6..da61330 100644
    --- a/app/controllers/session_controller.rb
    +++ b/app/controllers/session_controller.rb
    @@ -48,6 +48,7 @@ class SessionController < ApplicationController
             end
           else
             session[:sso_payload] = request.query_string
    +        cookies[:sso_payload] = request.query_string
             redirect_to path('/login')
           end
         else

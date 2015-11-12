Example maven project that includes both the backend, based on a jersey jax-rs 
implementation, and the frontend based on react.js and flux (including react-
router). The project can be build via maven and deployed in jetty.

# Structure

The project files are structured following a basic maven layout:
```
pom.xml                 # Maven project configuration
\-src                   # Directory containing all the source files
  \-main
    \-frontend          # Directory containing all the frontend files
    \-java              # Directory containing all the backend files
    \-resources         # Additional java resources
    \-webapp            # Default java web application directory. Empty except 
                        # the web.xml in the WEB-INF folder.
```

When building the project all files, including the final war archive, will be 
compiled in and copied into the `target` directory.

## Backend

<todo>

## Frontend

<todo>

# Running
The following command will build and package the backend together with the
frontend in a single war. The war is deployed in a jetty server running on port 
8080.
```
mvn jetty:run-war
```

# Maven archetype

Howto generate a maven archetype from this project.

<todo>

# Netbeans integration

* Go to the project properties.
* Select the "Run Project" action in the "actions" settings screen.
* Configure the "jetty:run-war" goal in the "Execute Goals" field.

You can now just run your project (F6) to rebuild the war and deploy it in a 
running jetty server. Remember to stop the server fist if it is already running.

# Issues / Improvements

* Currently there is no JSX code highlighting / completion in Netbeans
* Automatically stop a running jetty instance when re-running your project
* Configure live-redeploy in the running jetty instance which also rebuilds the
frontend project

# Resources

http://christianalfoni.github.io/javascript/2014/08/15/react-js-workflow.html
--> https://github.com/christianalfoni/react-app-boilerplate

https://spinspire.com/article/creating-restful-service-java-and-jersey-netbeans
http://www.vogella.com/tutorials/REST/article.html#crud

https://maven.apache.org/guides/mini/guide-creating-archetypes.html
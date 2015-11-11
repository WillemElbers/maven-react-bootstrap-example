Example maven project that includes both the backend, based on a jersey jax-rs 
implementation, and the frontend based on react.js and flux (including react-
router). The project can be build via maven and deployed in jetty.

# Structure

```
pom.xml
\-src
  \-main
    \-frontend
    \-java
    \-resources
    \-webapp
```

# Running
The following command will build and package the backend together with the
frontend in a single war. The war is deployed in a jetty server running on port 
8080.
```
mvn jetty:run-war
```

# Resources

http://christianalfoni.github.io/javascript/2014/08/15/react-js-workflow.html
--> https://github.com/christianalfoni/react-app-boilerplate

https://spinspire.com/article/creating-restful-service-java-and-jersey-netbeans
http://www.vogella.com/tutorials/REST/article.html#crud

https://maven.apache.org/guides/mini/guide-creating-archetypes.html
If you consider frontend layer as independent layer which would work without backend. So we can create frontend applications which can hit an api which returns a fake response and that makes sures that our application is able to make request and get the response back and once you have response you are able to pass it, visualize it and do n number of different activities that you want to do with any web application.

## First create an application using react which will make API call, make all 5 systems call and all other things to get the response back and perform the activities on its own as an individual web application.

Next we extend same CRUD application to envoke backend call. Here envoking backend call means that we will create Express API and points and deploy on node and make our react application to call those APIs. At this point we are not going to call database but again we are going to fake the responses back to frontend from middleware. 

Once we are done with the middleware development or basically learning node and express. Next we learn how to create MongoDB, create cluster, create the schemas, and we are going to extend this application to Express API to call the database.


## Component lifecyclemethod 
Mounting - constructor, getDerivedStateFromProps, render, componenetDidMount - called only once in lifecycle (perform AJX Calls required for initialization)

Updating - Called everytime a component is updated - getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate - called only once 

Unmounting - componentWillUnmount - cleanup activities, cancelling subscriptions, etc.

Error Handling - getDerivedStateFromError, componentDidCatch


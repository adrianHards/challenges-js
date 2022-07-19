// arrow function where carerData is a parameter
// async makes a function return a Promise
const updateCarer = async carerData => {
  // carerData a class? Has access to what looks like an instance method
  // more likely is that it is a JavaScript object, properties of which we can access with . and key
  // if called method on email of carerData results in false
  if (!isValidEmail(carerData.email)) {
    // throw statement allows you to create a custom error/exception
    // current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack
    throw new Error('Invalid email')
  }

  // await makes a function wait for a Promise
  // presumably database here is a model with the instance method getCarer which uses the carer's email address to find instance of carer from the database
  const existingCarer = await database.getCarer(carer.email)

  // if instance of carer does not exist, i.e. not true
  if (!existingCarer) {
    throw new Error('Carer does not exist')
  }

  // create variable, use spread operator to merge two objects
  // if key already exists it is overwritten with new carerData
  const newCarer = {
    ...existingCarer,
    ...carerData,
  }

  // try statement allows you to define a block of code to be tested for errors while it is being executed.
  try {
    // try updating existing career instance found with email with new data
    await database.updateCarer(carer.email, newCarer)
    // catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
  } catch (e) {
    // e is for error, and browser dependent message with be left in console
    console.error(e)
  }

  try {
    await billingService.updateCarer(carer.email, newCarer)
  } catch (e) {
    console.error(e)
  }

  // if all is well HTTP 200 OK success status response code indicates that the request has succeeded.
  return {
    statusCode: 200,
    body: 'success'
  }
}

# AngularExamples

Following Udemy course Angular + Node

## Notes
- Install mongodb on Linux from here: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

## Development environment

### Starting the development environment
- Run the following (`npm run` and `ng serve` on different terminals):
```sh
sudo service mongod start
npm run start:server
ng serve
```

## Mongo
- Start mongodb shell and connect to our localhost DB:
```sh
mongo
```
- Queries etc (inside mongodb shell)
```sh
show databases
use course-app-db
show collections
db.posts.find() # Show all items in one collection
```
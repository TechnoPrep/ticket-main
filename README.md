
# Total Ticket

Create a centralized buying platform to connect event-goers to their favorite performers



## User Story

A user can enter our site and search for events around the country without needing to create an account

From there a user can find tickets across multiple sites and buy them from a vendor 

From the search a logged in user can save events to their profile to view later

A user can create an account and confirm their account via email

The user can also reset their password at any point via email link

Within their account a user can view favorite events as well as remove events





## Access and Logo

To access this site visit total-ticket.com



## Deployment

To deploy this project run

```bash
  npm install 
  npm run seed
  npm run build
  npm run develop
```


## Tech Stack

**Client:** React, MaterialUI, Bootstrap

**Server:** Node, Express, MongoDB


## API Reference

Please contact Nathaniel Ehlirch if you require an API key


APIs Used:

Ticketmaster

Stubhub

Seatgeak


#### Ticketmaster API

  GET /api/key&term=${searchTerm}/zipcode=${zipCode}


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | API Key Here|


## Contributing

Contributions are always welcome!

Please email kurt.weinerman@gmail.com if you wish to contribute.

Please adhere to this project's `code of conduct`.

## Authors

- [Kurt Weinerman](https://github.com/kweinerman)
- [Tommy Jobin](https://github.com/LoopySquare)
- [Nathaniel Ehrlich](https://github.com/TechnoPrep)


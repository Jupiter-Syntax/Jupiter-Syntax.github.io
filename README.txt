RYFT SMP SHOP
==============

Files
-----
index.html  -> Store layout
style.css   -> All styling/theme
script.js   -> Products, prices, cart, checkout demo, server IP

SETUP
-----
1. Put all 3 files in the same folder.
2. Open index.html in your browser to preview it.
3. For a real website, upload the folder to your web host.

EDIT YOUR SHOP
--------------
Open script.js and edit the shopConfig object at the top.

Change:
- serverIp
- currency
- rank prices
- spawner price
- crate key price
- item descriptions
- item features

REAL CHECKOUT
-------------
This page intentionally does NOT process payments.
The checkout currently creates an order summary that can be copied.

Connect the checkout button to a real provider such as:
- Tebex
- CraftingStore
- Stripe
- Your own backend

IMPORTANT
---------
The sample descriptions/features are placeholders. Replace them with the exact
perks/commands your Ryft SMP server actually gives each rank.


RYFTSMP PLUS
------------
RyftSMP Plus is configured as a $35/month subscription and includes:
- 10 Spawner Keys every month
- 20 Elite Keys every month
- 3 Exotic Keys every month
- 2 Ryft Keys every month
- Donor Rank
- Donor Kit

TEBEX CONNECTION
----------------
The website is still a frontend demo and does not contain a Tebex private key.
For a real setup, create the products/packages in your Tebex Control Panel, then
connect the website using Tebex.js/Headless API or redirect checkout. Keep all
Tebex private credentials on a server/backend, never inside script.js.

For RyftSMP Plus in Tebex, create a package named "RyftSMP Plus", set the price
to $35, choose Recurring Subscription, and set Charge Every to 1 month. Add
deliverables/commands for the Donor Rank, Donor Kit, and the monthly key rewards.
Tebex supports recurring subscriptions and lets you manage active subscriptions
and billing dates in the Creator Panel.

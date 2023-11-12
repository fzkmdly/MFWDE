const assert = require('assert');
// eslint-disable-next-line no-unused-vars
const {async} = require('regenerator-runtime');

Feature('(Un)Liking Restaurants');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({I}) => {
  I.seeElement('.fav-resto');
  I.see('No your favorite restaurant here....');
});

Scenario('liking one resto', async ({I}) => {
  I.see('No your favorite restaurant here....');

  I.amOnPage('/');

  I.seeElement('.topCard h2 a');

  const firstResto = locate('h2 a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestoTitle = await I.grabTextFrom('h2 a');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('Unliking one resto', async ({I}) => {
  I.see('No your favorite restaurant here....');

  I.amOnPage('/');

  I.seeElement('.topCard h2 a');

  const firstResto = locate('h2 a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const firstLikedResto = locate('h2 a').first();
  const firstLikedRestoTitle = await I.grabTextFrom(firstLikedResto);

  assert.strictEqual(firstRestoTitle, firstLikedRestoTitle);

  I.click(firstLikedResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('No your favorite restaurant here....');
});


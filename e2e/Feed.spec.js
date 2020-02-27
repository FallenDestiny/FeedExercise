describe('Feed', () => {

  it('render a tappable list of posts', async () => {
    await expect(element(by.id('flatListFeed'))).toBeVisible();
    await waitFor(element(by.id('postCell0')))
      .toBeVisible()
      .withTimeout(2000);
  });


  it('scroll down for a new posts', async () => {
    const flatlist = element(by.id('flatListFeed'))
    await expect(flatlist).toBeVisible();
    await flatlist.scrollTo('bottom')
    await expect(element(by.id('postCell2'))).toBeVisible();
    await flatlist.scroll(300,'down')
    await waitFor(element(by.id('postCell3')))
      .toBeVisible()
      .withTimeout(2000);
  });


  it('navigate to post review', async () => {
    const cell = element(by.id('postCell3'))
    await expect(cell).toBeVisible();
    await cell.tap()
    await waitFor(element(by.id('postImage')))
      .toBeVisible()
      .withTimeout(2000);
      await expect(element(by.id('userHeader'))).toBeVisible();
      await expect(element(by.id('postInfo'))).toBeVisible();
      await expect(element(by.id('postBody'))).toBeVisible();
  });

  it('navigate to user review', async () => {
    const userHeader = element(by.id('userHeader'))
    await expect(userHeader).toBeVisible();
    await userHeader.tap()
    await waitFor(element(by.id('userIcon')))
      .toBeVisible()
      .withTimeout(2000);
      await expect(element(by.id('username'))).toBeVisible();
      await expect(element(by.id('userDescription'))).toBeVisible();
      await expect(element(by.id('userInfo'))).toBeVisible();
      await expect(element(by.id('userPostsList'))).toBeVisible();
  });

});

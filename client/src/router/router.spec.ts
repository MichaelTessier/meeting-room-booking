describe('router', () => {
  it('should have correct routes', () => {
    const routeNames = router
      .getRoutes()
      .map((route) => route.name)
      .sort()

    expect(routeNames).toStrictEqual(
      ['room-booking', 'room-overview', 'user'].sort(),
    )
  })
})

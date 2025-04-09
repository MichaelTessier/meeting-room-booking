<template>
  <header class="bg-muted p-4 shadow dark:bg-background h-[100px] sticky top-0">
    <menu class="flex items-center justify-between h-full">
      <div class="flex items-center gap-4">
        <Icon icon="notification" />
        <Icon icon="mail" />
      </div>
      <div class="flex items-center gap-4">
        <UserDarkMode />
        <UserAvatar />
        <Icon icon="menu" />
      </div>
    </menu>
  </header>
</template>

class base {
  exec {'update':
    command => '/usr/bin/apt-get update',
    before => Exec['upgrade']
  }
  exec {'upgrade':
    command => '/usr/bin/apt-get upgrade -y',
    require => Exec['update']
  }
}
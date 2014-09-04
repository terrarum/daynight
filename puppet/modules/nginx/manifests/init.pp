class nginx {
  package { 'nginx':
    ensure => present,
    require => Exec['update'],
  }

  service { 'nginx':
    ensure => running,
    require => Package['nginx'],
  }
}
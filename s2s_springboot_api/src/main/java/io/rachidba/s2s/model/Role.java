package io.rachidba.s2s.model;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
  ROLE_ADMIN, ROLE_STUDENT, ROLE_TUTOR;

  public String getAuthority() {
    return name();
  }

}

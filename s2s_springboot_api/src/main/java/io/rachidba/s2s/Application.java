package io.rachidba.s2s;

import java.util.ArrayList;
import java.util.Arrays;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.rachidba.s2s.model.Role;
import io.rachidba.s2s.model.User;
import io.rachidba.s2s.service.UserService;

@SpringBootApplication
public class Application implements CommandLineRunner {

	@Autowired
	UserService userService;

	public static void main(String[] args) {
		System.out.println("Hello world! -- 1");
		SpringApplication.run(Application.class, args);
		System.out.println("Hello world! -- 2");
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

	@Override
	public void run(String... params) throws Exception {
		User admin = new User();
		admin.setUsername("admin");
		admin.setPassword("admin");
		admin.setEmail("admin@email.com");
		admin.setRoles(new ArrayList<Role>(Arrays.asList(Role.ROLE_ADMIN)));

		userService.signup(admin);

		User client = new User();
		client.setUsername("client");
		client.setPassword("client");
		client.setEmail("client@email.com");
		client.setRoles(new ArrayList<Role>(Arrays.asList(Role.ROLE_STUDENT)));

		userService.signup(client);
	}
}
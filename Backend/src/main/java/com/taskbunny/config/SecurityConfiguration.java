package com.taskbunny.config;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.header.writers.StaticHeadersWriter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.taskbunny.filters.JwtRequestFilter;
import com.taskbunny.service.MyUserDetailsService;
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private MyUserDetailsService myUserDetailsService; 
	
	@Autowired
	private JwtRequestFilter jwtRequestFilter;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		auth.userDetailsService(myUserDetailsService);

	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and();
		http.httpBasic().disable();
		http.authorizeRequests()
//			.antMatchers("/role").hasAnyRole("PROVIDER","CLIENT")
//			.antMatchers("/users").hasAnyRole("CLIENT", "PROVIDER")
//			.antMatchers("/users").hasRole("ADMIN")
//			.antMatchers("/providerDetails/**").hasRole("PROVIDER")
//			//.antMatchers("/tasks").hasAnyRole("CLIENT","ADMIN","PROVIDER")
//			.antMatchers("/tasks/**").hasAnyRole("CLIENT","PROVIDER")
//			.antMatchers("/tasks/**").hasRole("ADMIN")
//			.antMatchers("/task/**").hasAnyRole("PROVIDER","ADMIN")
//			.antMatchers("/tasks/status").hasAnyRole("CLIENT")
//			.antMatchers("/tasks/status/").hasAnyRole("CLIENT")+
			.antMatchers("/*").permitAll()
			.antMatchers("/", "static/css", "static/js").permitAll()
			.and().formLogin();
		
		http.csrf()
			.disable()
			.authorizeRequests()
			.antMatchers("/authenticate")
			.permitAll()
			.anyRequest()
			.authenticated()
			.and()
			.sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
		
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
	    web.ignoring().antMatchers("/usersregister");
	}
	
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean()throws Exception{
		return super.authenticationManagerBean();
	}
	
	@Bean
	public PasswordEncoder getPasswordEncoder() {
		return NoOpPasswordEncoder.getInstance();
	}
	
	
//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurerAdapter() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/**");
//            }
//        };
//    }
	
	

//	 @Bean
//	    CorsConfigurationSource corsConfigurationSource() {
//	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//	        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
//	        return source;
//	    }

	 
	
///*	 @Bean
//	 public WebSecurityConfigurerAdapter webSecurity() {
//	     return new WebSecurityConfigurerAdapter() {
//
//	         @Override
//	         protected void configure(HttpSecurity http) throws Exception {
//	             http.headers().addHeaderWriter(
//	                     new StaticHeadersWriter("Access-Control-Allow-Origin", "*"));
//
//
//	         }
//	     };
//	 }
	 
//	 @Configuration
//	 @EnableWebMvc
//	 public class WebConfig extends WebMvcConfigurerAdapter {
//
//	 	@Override
//	 	public void addCorsMappings(CorsRegistry registry) {
//	 		registry.addMapping("/api/**")
//	 			.allowedOrigins("http://localhost:3000")
//	 			.allowedMethods("GET","PUT", "DELETE")
//	 			.allowedHeaders("*");
//	 			
//	 	}
//	 }
}

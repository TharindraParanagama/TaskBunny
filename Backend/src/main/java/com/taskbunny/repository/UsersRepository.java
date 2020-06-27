package com.taskbunny.repository;

import java.util.Optional;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.taskbunny.models.Tasks;
import com.taskbunny.models.Users;

public interface UsersRepository extends JpaRepository<Users, Integer> {
	Optional<Users> findByUserName(String userName);
	
	@Query
	(value = "SELECT * FROM USERS WHERE USERS.role = 'client'",nativeQuery = true)
	Collection<Users> findAllActiveUsersNative();

	@Modifying(clearAutomatically = true)
	@Transactional
	@Query(value="UPDATE Users SET picture = :picture WHERE userid= :id",nativeQuery = true)
	void updatePicture(@Param("id") int id,@Param("picture") byte[] picture);

	@Query
	(value = "SELECT firstname,lastname FROM Users JOIN Tasks ON Users.userid=Tasks.providerid  WHERE Users.userid = :providerid",nativeQuery = true)
	List<String> getProviderName(@Param("providerid") int providerid);
	
	/*@Query
	(value = "SELECT userid FROM USERS WHERE USERS.firstname = :firstname",nativeQuery = true)
	int getUserIDByFirstname(String firstname);*/
	
	@Query
	(value = "SELECT providerid FROM Users JOIN Tasks ON Users.userid=Tasks.providerid  WHERE Users.username = :username",nativeQuery = true)
	Collection<String> getProviderIDByUserName(@Param("username") String username);
	
	@Query
	(value = "SELECT role FROM Users WHERE Users.username = :username",nativeQuery = true)
	String getUserRoleByUsername(@Param("username") String username);
	

	@Query
	(value = "SELECT firstname,lastname FROM Users WHERE Users.userid = :providerid",nativeQuery = true)
	List<String> getProviderDetailsByID(int providerid);
	
	@Query
	(value = "SELECT * FROM Users WHERE Users.username = :username",nativeQuery = true)
	Collection<Users> getClientDetails(@Param("username") String username);
	

	@Transactional
    @Modifying
    @Query(value = "delete from Users where userid = :userid",nativeQuery = true)
	void deleteByUserID(@Param("userid") int id);

	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query
	(value = "UPDATE Users SET username = :username, password =:password, role =:role, firstname =:firstname, lastname=:lastname WHERE Users.userid = :userid",nativeQuery = true)
	void updateUserbyId(@Param("userid") int userid, @Param("username")String username,@Param("password")String password,@Param("role")String role,@Param("firstname")String firstname,@Param("lastname")String lastname);
	
	@Query(value = "SELECT firstname from Users where username = :username",nativeQuery = true)
	String getFirstName(@Param("username") String username);

	
	@Query(value = "SELECT clientid FROM Users JOIN Tasks ON Users.userid=Tasks.clientid  WHERE Users.username = :username",nativeQuery = true)
	Collection<String> getUserIDByUserName(String username);
	
	
	
	
}

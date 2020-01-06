package happypets.service;

import happypets.model.User;

import java.util.List;

public interface UserService {
    public boolean saveUser(User user);
    public List<User> getUsers();
    public boolean deleteUser(User user);
    public List<User> getUserByID(User user);
    public boolean updateUser(User user);

}

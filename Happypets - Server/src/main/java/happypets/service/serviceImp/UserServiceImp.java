package happypets.service.serviceImp;

import happypets.dao.UserDAO;
import happypets.model.User;
import happypets.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserServiceImp implements UserService {


    @Autowired
    UserDAO userDAO;

    @Override
    public boolean saveUser(User user) {
        return userDAO.saveUser(user);
    }

    @Override
    public List<User> getUsers() {
        return userDAO.getUser();
    }

    @Override
    public boolean deleteUser(User user) {
        return userDAO.deleteUser(user);
    }

    @Override
    public List<User> getUserByID(User user) {
        return userDAO.getUserByID(user);
    }

    @Override
    public boolean updateUser(User user) {
        return userDAO.updateUser(user);
    }
}

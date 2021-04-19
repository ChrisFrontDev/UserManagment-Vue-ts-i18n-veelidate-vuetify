class AuthService {
  login(email: string, password: string) {
    console.log(email);
    console.log(password);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const error = email !== 'admin@admin.com' && password !== 'admin';
        if (!error) {
          const userData = {
            email: 'admin@admin.com',
            name: 'Chris Grenzel',
            avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
            accessToken: 'kjsahdkj213jk34hk21j3ehjqwge',
          };
          localStorage.setItem('user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject('Email or Password incorrect');
        }
      }, 2000);
    });
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();

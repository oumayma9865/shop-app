const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
const multer = require('multer');

// ...
const storage = multer.memoryStorage(); // Stockage en mémoire pour les fichiers

const upload = multer({ storage: storage });
const app = express();

const port = 3000;



if(mongoose.connect('mongodb+srv://hlelomayma95:mobilelegends2016@cluster0.metovxw.mongodb.net/shopApp' ))
  {
    console.log('Connecté à MongoDB');}


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use(express.json());

    const userSchema = new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        role: String,
        login: { type: Boolean, default: false },
      });



      const User = mongoose.model('User', userSchema);

// Register route
app.post('/register', async (req, res) => {
  console.log('Requête POST reçue sur /register', req.body);
 
  try {
    const { username, email, password, role } = req.body; // Extract role from req.body
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Save role along with other user details
    const newUser = new User({  role  , username, email, password: hashedPassword });
    await newUser.save();

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('Requête POST reçue sur /login', req.body);
    // Recherchez l'utilisateur dans la base de données
    const user = await User.findOne({ email });
  
    if (user) {
      // Comparaison sécurisée du mot de passe
      if (user.role === 'vendeur' && !user.login) {
        return res.status(401).json({ message: 'Vous n\'êtes pas autorisé à vous connecter' });
      }
      const match = await bcrypt.compare(password, user.password);
  
      if (match) {
        // Authentification réussie
        res.status(200).json({ message: 'Connexion réussie', userType: user.role  });
       
      } else {
        // Authentification échouée (identifiants incorrects)
        res.status(401).json({ message: 'Identifiants invalides' });
      }
    } else {
      // Authentification échouée (identifiants incorrects)
      res.status(401).json({ message: 'Identifiants invalides' });
    }
  
  
  });
  ////////////////////////////////////////////////////


  app.get('/sellers', async (req, res) => {
    try {
      const sellers = await User.find({ role: 'vendeur' }, 'username'); // Utilisez 'username' au lieu de 'username'
      res.json(sellers);
    } catch (error) {
      console.error('Erreur lors de la récupération des vendeurs :', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des vendeurs' });
    }
  });
  
  // Route pour accepter un vendeur
  app.post('/accept-seller', async (req, res) => {
    const { username } = req.body;

    try {
        // Mettre à jour l'utilisateur pour définir le champ login sur true
        await User.updateOne({ username }, { login: true });

        res.status(200).json({ message: 'Vendeur accepté avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'acceptation du vendeur :', error);
        res.status(500).json({ message: 'Erreur lors de l\'acceptation du vendeur' });
    }
  });
  
  // Route pour rejeter un vendeur
  app.post('/reject-seller', async (req, res) => {
    const { username } = req.body;

    try {
        // Supprimer l'utilisateur ayant le nom donné
        await User.deleteOne({ username });

        res.status(200).json({ message: 'Vendeur rejeté avec succès' });
    } catch (error) {
        console.error('Erreur lors du rejet du vendeur :', error);
        res.status(500).json({ message: 'Erreur lors du rejet du vendeur' });
    }
  });

  app.get('/logged-in-sellers', async (req, res) => {
    try {
      const sellers = await User.find({ login: true }, 'username');
      res.json(sellers);
    } catch (error) {
      console.error('Erreur lors de la récupération des vendeurs connectés :', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des vendeurs connectés' });
    }
  });


  app.delete('/sellers/:username', async (req, res) => {
    const { username } = req.params;
  
    try {
      // Supprimer l'utilisateur avec le nom d'utilisateur donné
      const deletedSeller = await User.findOneAndDelete({ username });
  
      if (deletedSeller) {
        res.status(200).json({ message: 'Vendeur supprimé avec succès' });
      } else {
        res.status(404).json({ message: 'Vendeur non trouvé' });
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du vendeur:', error);
      res.status(500).json({ message: 'Erreur lors de la suppression du vendeur' });
    }
  });
  app.get('/', (req, res) => {
    res.send('Bienvenue sur votre serveur Express avec Mongoose!');
  });

  
  // Démarrage du serveur
  app.listen(port, () => {
    console.log(`Serveur Express écoutant sur le port ${port}`);
  });
  
  
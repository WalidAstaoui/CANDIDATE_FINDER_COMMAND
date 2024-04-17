# CANDIDATE_FINDER_COMMAND

## En Local Host

### Candidats

#### Ajout d'un seul candidat
```POST : http://localhost:8080/v1/candidates/```

Exemple de corps de requête :
```
{
            "name": "Noah Renard-Michel",
            "email": "noah.renard-michel@gmail.com",
            "phone": "0788210936",
            "cv": "Compétences: Cuisine du monde, Gastronomie végétarienne, Gestion de restaurant. Expérience: 6 ans en tant que chef cuisinier dans des restaurants gastronomiques. Projets: Création de menus gastronomiques végétariens, Gestion d'une brigade de cuisine. Certifications: Certifié en cuisine végétarienne."
}
```

#### Ajout d'une liste de candidats à la fois 
(TO-DO : implémenter un rollback en cas de failure avant le dernier ajout)

```POST : http://localhost:8080/v1/candidates/addAll/```

Exemple de corps de requête :
```
[
        {
            "name": "Lucie Berger-Lefevre",
            "email": "lucie.berger.lefevre@gmail.com",
            "phone": "0758391264",
            "cv": "Compétences: Danse, Chorégraphie, Enseignement de la danse. Expérience: 6 ans en tant que danseuse professionnelle et chorégraphe. Projets: Création de spectacles de danse, Cours de danse pour enfants et adultes. Certifications: Certifiée en danse et chorégraphie."
        },
        {
            "name": "Anna Petit-Lemoine",
            "email": "anna.petit.lemoine@gmail.com",
            "phone": "0765981234",
            "cv": "Compétences: Horticulture, Jardinage, Design de jardins. Expérience: 5 ans en tant qu'horticultrice et designer de jardins. Projets: Création de jardins écologiques, Aménagement de jardins paysagers. Certifications: Certifiée en design de jardins."
        },
        {
            "name": "Noah Renard-Michel",
            "email": "noah.renard-michel@gmail.com",
            "phone": "0788210936",
            "cv": "Compétences: Cuisine du monde, Gastronomie végétarienne, Gestion de restaurant. Expérience: 6 ans en tant que chef cuisinier dans des restaurants gastronomiques. Projets: Création de menus gastronomiques végétariens, Gestion d'une brigade de cuisine. Certifications: Certifié en cuisine végétarienne."
        }
]
```

### Offres d'emplois
#### Ajout d'un seul job
```POST : http://localhost:8080/v1/jobs/```

Exemple de corps de requête :
```
{
    "title": "Coach de fitness",
    "description": "Nous cherchons un coach de fitness certifié pour fournir un coaching personnalisé et des programmes d'entraînement à nos clients. Une passion pour la santé et le bien-être est essentielle.",
    "company": "Fitness Plus"
}
```

#### Ajout d'une liste de jobs à la fois
```POST : http://localhost:8080/v1/jobs/addAll/```

Exemple de corps de requête :
```
[
    {
        "title": "Barman",
        "description": "Nous recherchons un barman compétent pour rejoindre notre équipe. Une expérience en mixologie, un bon sens de l'hospitalité et une capacité à travailler sous pression sont nécessaires.",
        "company": "Bar Lounge"
    },
    {
        "title": "Animateur de club de vacances",
        "description": "Rejoignez notre équipe d'animation en tant qu'animateur de club de vacances. Vous serez responsable de divertir les clients avec des activités variées et des spectacles en soirée.",
        "company": "Vacation Resorts"
    },
    {
        "title": "Coach de fitness",
        "description": "Nous cherchons un coach de fitness certifié pour fournir un coaching personnalisé et des programmes d'entraînement à nos clients. Une passion pour la santé et le bien-être est essentielle.",
        "company": "Fitness Plus"
    }
]
```

### Candidatures
```POST : http://localhost:8080/v1/applications/```

Exemple de corps de requête :
```
{
    "candidateId": "2",
    "jobId": "3"
}
```

## Sur l'app Azure

URL publique : ```https://candidate-finder-app.azurewebsites.net/```

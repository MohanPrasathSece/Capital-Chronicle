import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/privacy')({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container-edit py-16 md:py-24 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-7xl font-bold uppercase mb-8 border-b-4 border-black pb-4">Politique de Confidentialité</h1>
        
        <div className="space-y-8 font-serif text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Introduction</h2>
            <p>Bienvenue sur Capital Chronicle. Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité vous informera sur la manière dont nous traitons vos données personnelles lorsque vous visitez notre site Web et vous renseignera sur vos droits en matière de confidentialité et sur la manière dont la loi vous protège.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Définitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Données Personnelles</strong> désigne toute information se rapportant à une personne physique identifiée ou identifiable.</li>
              <li><strong>Service</strong> désigne le site Web de Capital Chronicle et ses fonctionnalités associées.</li>
              <li><strong>Données d'Utilisation</strong> sont les données collectées automatiquement, générées soit par l'utilisation du Service, soit par l'infrastructure du Service elle-même.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Informations que Nous Collectons</h2>
            <p>Nous pouvons collecter, utiliser, stocker et transférer différents types de données personnelles vous concernant, que nous avons regroupées comme suit :</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Données d'Identité</strong> incluent le prénom, le nom, le nom d'utilisateur ou un identifiant similaire.</li>
              <li><strong>Données de Contact</strong> incluent l'adresse e-mail et les numéros de téléphone.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Informations que Vous Fournissez Volontairement</h2>
            <p>Lorsque vous remplissez des formulaires sur notre site (tels que nos formulaires de demande de renseignements), vous nous fournissez volontairement des Données Personnelles, notamment votre Nom, E-mail, Numéro de Contact et tout contenu de Message. Ces informations sont soumises explicitement par vous dans le but de communiquer avec notre équipe.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Informations Collectées Automatiquement</h2>
            <p>Lors de vos interactions avec notre site Web, nous pouvons collecter automatiquement des Données Techniques concernant votre équipement, vos actions de navigation et vos modèles de navigation. Nous collectons ces données personnelles en utilisant des cookies, des journaux de serveur et d'autres technologies similaires.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Objectif de la Collecte de Données</h2>
            <p>Nous utilisons vos données pour :</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Fournir, exploiter et maintenir notre site Web.</li>
              <li>Améliorer, personnaliser et développer notre site Web.</li>
              <li>Comprendre et analyser comment vous utilisez notre site Web.</li>
              <li>Communiquer avec vous, directement ou par l'intermédiaire de l'un de nos partenaires, y compris pour le service client et pour vous fournir des mises à jour et d'autres informations relatives au site Web.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Base Légale du Traitement</h2>
            <p>Le cas échéant, en vertu du RGPD, notre base légale pour la collecte et l'utilisation des informations personnelles décrites ci-dessus dépendra des informations personnelles concernées et du contexte spécifique dans lequel nous les collectons. Nous collectons normalement des informations personnelles auprès de vous uniquement lorsque nous avons votre consentement pour le faire ou lorsque le traitement relève de nos intérêts légitimes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Comment Nous Utilisons les Informations Personnelles</h2>
            <p>Nous utilisons les informations que nous collectons de diverses manières, y compris pour répondre à vos demandes soumises via nos formulaires de contact, vous envoyer des e-mails et détecter et prévenir la fraude.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">CRM et Prestataires de Services Tiers</h2>
            <p>Les informations soumises via nos formulaires de Contact et de Demande de Renseignements sont transmises de manière sécurisée et stockées dans notre système tiers de Gestion de la Relation Client (CRM) fourni par CRM Core (inwo.crmcore.me) afin de traiter et gérer vos demandes. Nos formulaires de Connexion n'envoient pas de données à ce CRM. Nous n'exposons pas les jetons d'API ou les informations d'identification backend sensibles dans notre code frontal.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Cookies et Technologies de Suivi</h2>
            <p>Nous utilisons des cookies et des technologies de suivi similaires pour suivre l'activité sur notre Service et conserver certaines informations. Vous pouvez configurer votre navigateur pour qu'il refuse tous les cookies ou pour qu'il indique quand un cookie est envoyé.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Mesures de Sécurité des Données</h2>
            <p>Nous avons mis en place des mesures de sécurité appropriées pour éviter que vos données personnelles ne soient accidentellement perdues, utilisées ou consultées de manière non autorisée, altérées ou divulguées. Toutes les requêtes CRM sont effectuées de manière sécurisée via des routes d'API côté serveur utilisant des variables d'environnement chiffrées.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Conservation des Données</h2>
            <p>Nous ne conserverons vos données personnelles que le temps nécessaire à la réalisation des finalités pour lesquelles nous les avons collectées, y compris aux fins de satisfaire à toute exigence légale, comptable ou de déclaration.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Transferts Internationaux de Données</h2>
            <p>Vos informations, y compris les Données Personnelles, peuvent être transférées vers — et maintenues sur — des ordinateurs situés en dehors de votre état, province, pays ou autre juridiction gouvernementale où les lois sur la protection des données peuvent différer de celles de votre juridiction.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Droits des Utilisateurs</h2>
            <p>Dans certaines circonstances, vous avez des droits en vertu des lois sur la protection des données en relation avec vos données personnelles. Ceux-ci incluent le droit de demander l'accès, la correction, l'effacement, la restriction, le transfert, de s'opposer au traitement, à la portabilité des données et (lorsque la base légale du traitement est le consentement) de retirer son consentement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Communications Marketing</h2>
            <p>Vous recevrez des communications marketing de notre part si vous avez demandé des informations ou acheté des biens ou des services chez nous et que vous n'avez pas choisi de ne pas recevoir ce marketing.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Confidentialité des Enfants</h2>
            <p>Notre Service ne s'adresse à personne de moins de 18 ans. Nous ne collectons pas sciemment d'informations personnellement identifiables auprès de personnes de moins de 18 ans.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Sites Web Tiers</h2>
            <p>Notre Service peut contenir des liens vers d'autres sites Web qui ne sont pas exploités par nous. Si vous cliquez sur un lien tiers, vous serez dirigé vers le site de ce tiers. Nous vous conseillons vivement de consulter la Politique de Confidentialité de chaque site que vous visitez.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Mises à Jour de la Politique</h2>
            <p>Nous pouvons mettre à jour notre Politique de Confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle Politique de Confidentialité sur cette page.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Coordonnées</h2>
            <p>Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter via notre page de Demande de Renseignements (Enquiry).</p>
          </section>

          <section>
            <p className="text-sm italic">Dernière date de mise à jour : 18 juin 2026</p>
          </section>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t-4 border-black py-6 text-center font-sans font-bold uppercase text-xs mt-16">
        <p>© {new Date().getFullYear()} Capital Chronicle. Imprimé à l'ère numérique.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="/privacy" className="hover:underline">Politique de Confidentialité</a>
          <a href="/terms" className="hover:underline">Conditions Générales</a>
        </div>
      </footer>
    </div>
  );
}

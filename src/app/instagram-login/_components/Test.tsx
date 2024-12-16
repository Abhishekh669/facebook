import Image from 'next/image';
import React from 'react';
export default function Home() {
  return (
    <div className=" flex justify-center items-center min-h-screen bg-gray-50">
      <div className="relative w-full max-w-[935px]">
        {/* Background Image and Content */}
        <div className="relative flex">
          {/* The background image should be constrained and not cover the entire screen */}
          <div className="relative">
            <Image
              src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png"
              alt="Background Image"
              width={500}
              height={800}
              className="w-full h-auto" // The width is set to 100% of its container, height is auto to maintain aspect ratio
            />
            {/* The screenshots are placed above the background image, without overlapping */}
            <div className="absolute top-10 left-1/4 transform -translate-x-1/2 flex space-x-4">
              <Image
                src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
                alt="Bottom Screenshot"
                width={250}
                height={500}
                className="w-full"
              />
              <Image
                src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
                alt="Top Screenshot"
                width={250}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Sign Up Form */}
        <div className="relative bottom-24">
          <div className="border border-gray-300 rounded-lg flex flex-col p-12 bg-white">
            <div className="mb-8 text-center">
              <Image
                src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                alt="Instagram Logo"
                width={150}
                height={50}
                className="mx-auto"
              />
            </div>

            <form className="flex flex-col space-y-4">
              <input
                className="p-3 border border-gray-300 rounded-md text-sm placeholder-gray-500"
                type="text"
                name="username"
                placeholder="Num. téléphone, nom d’utilisateur ou e-mail"
              />
              <input
                className="p-3 border border-gray-300 rounded-md text-sm placeholder-gray-500"
                type="password"
                name="password"
                placeholder="Mot de passe"
              />
              <input
                className="bg-blue-500 text-white p-3 rounded-md font-semibold"
                type="submit"
                value="Se connecter"
              />
            </form>

            {/* OR Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500">OU</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Login with Facebook */}
            <div className="flex justify-center items-center mb-4">
              <Image
                src="/assets/img/Facebook_icon-icons.com_66805.png"
                alt="Facebook Logo"
                width={16}
                height={16}
                className="mr-2"
              />
              <span className="text-blue-600 font-semibold">Se connecter avec Facebook</span>
            </div>

            {/* Forgot Password & Sign Up Links */}
            <div className="flex justify-between text-sm text-gray-500">
              <span>Mot de passe oublié ?</span>
              <span className="text-blue-600 font-semibold cursor-pointer">
                Vous n’avez pas de compte ? Inscrivez-vous
              </span>
            </div>

            {/* Download App Links */}
            <div className="flex justify-center items-center mt-6">
              <span className="text-sm text-gray-500">Téléchargez l’application.</span>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <Image
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_french-fr.png/485fcccb52dc.png"
                alt="App Store"
                width={140}
                height={40}
                className="w-36"
              />
              <Image
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_french-fr.png/46aa4b6fd58d.png"
                alt="Google Play"
                width={140}
                height={40}
                className="w-36"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap justify-center items-center mt-8 text-sm text-gray-500">
          <div className="flex space-x-4">
            <span>Meta</span>
            <span>À propos</span>
            <span>Blog</span>
            <span>Emplois</span>
            <span>Aide</span>
            <span>API</span>
            <span>Confidentialité</span>
            <span>Conditions</span>
            <span>Comptes principaux</span>
            <span>Hashtags</span>
            <span>Lieux</span>
            <span>Instagram Lite</span>
            <span>Importation des contacts et non-utilisateurs</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-4 text-sm text-gray-500">
          <span>Danse</span>
          <span>Alimentation et boissons</span>
          <span>Maison et jardin</span>
          <span>Musique</span>
          <span>Arts visuels</span>
        </div>
        <div className="flex flex-wrap justify-center mt-4 text-sm text-gray-500">
          <span>Français</span>
          <span>© 2022 Instagram par Adam Azouz</span>
        </div>
      </div>
    </div>
  );
}

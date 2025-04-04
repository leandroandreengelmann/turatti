import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import colorCollections from '@/data/colorCollections';
import ColorDetailPage from '@/components/ColorDetailPage';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const collection = colorCollections.find(collection => collection.slug === params.slug);
  
  if (!collection) {
    return {
      title: 'Coleção não encontrada',
      description: 'A coleção solicitada não foi encontrada.'
    };
  }
  
  return {
    title: `${collection.name} - Coleção de Cores Suvinil | Turatti Materiais de Construção`,
    description: collection.description,
    keywords: `cores, tintas, suvinil, ${collection.name}, paleta de cores, decoração`
  };
}

export async function generateStaticParams() {
  return colorCollections.map(collection => ({
    slug: collection.slug,
  }));
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = colorCollections.find(collection => collection.slug === params.slug);
  
  if (!collection) {
    notFound();
  }
  
  return <ColorDetailPage collection={collection} />;
}
import { ArticleLayout } from '@/app/components/ArticleLayout';
import { toolDetails } from '../[id]/page';

export default function AugmentPage() {
  const tool = toolDetails['augment'];
  
  return (
    <ArticleLayout title={tool.name} description={tool.description}>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {tool.name}
        </h1>
        
        <div className="prose dark:prose-invert">
          <p className="lead">{tool.description}</p>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Overview</h2>
            <div className="mt-4 whitespace-pre-wrap">{tool.longDescription}</div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold">Key Features</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {tool.features.map((feature, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold">Pricing Plans</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {tool.pricing.map((plan, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <h3 className="font-semibold">{plan.plan}</h3>
                  <p className="mt-2 text-lg font-bold">{plan.price}</p>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
} 
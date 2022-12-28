import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['dear-ox-6437-us1-kafka.upstash.io:9092'],
                sasl: {
                  mechanism: 'scram-sha-256',
                  username: 'ZGVhci1veC02NDM3JIQtk8Sx7j-tg4-Co3m8ojlrMOLXDPchsZzsAdwG0NzsegI',
                  password: 'le-oS51jktfhsuyh4EwR0rNHvu0WcW4k86WMVdxQ-S1MRF-c4Gi5WV5FIRUz72BZPyhJuw==',
                },
                ssl: true, 
            }
        });
    }

    async onModuleDestroy() {
        await this.close();
    }
}
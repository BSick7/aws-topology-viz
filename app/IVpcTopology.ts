namespace viz {
    export interface IVpcTopology {
        vpc: IResource;
        resources: IResource[];
    }

    export interface IResource {
        arn: string;
        id: string;
        type: string;
        metadata: any;
        linkArns: string[];
        childrenArns: string[];
    }
}